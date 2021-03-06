import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { DeleteButton, EditableWrapper, Block } from '../styles/common';
import { HotelDetails, Root } from '../../../types/response';
import { Flex, FlexKid, VerticalSpacer } from '../../Layout';
import HotelCardVariant from '../../HotelCards/HotelCardVariant';
import { ButtonLink } from '../../Button/Button';
import useDeleteRequest from '../../../hooks/useDeleteRequest';
import { API_ENDPOINT } from '../../../util/constants';
import { trash, plus } from '../../../util/icons';
import useApi from '../../../hooks/useApi';
import Loader from '../../Loader/Loader';
import { Context } from '../../../context/GlobalContext';
import { Types } from '../../../reducer/favoriteCardsReducer';

interface Props {}

const EditableEstablishmentsList: React.FC<Props> = () => {
  const { results, loading } = useApi<Root>({
    url: `${process.env.REACT_APP_API_URL}${API_ENDPOINT.establishments}`,
    initialData: {
      code: 0,
      data: [],
    },
  });
  const history = useHistory();
  const [establishmentsList, setEstablishmentsList] = React.useState<HotelDetails[]>([]);
  const { deleting, removed, action, removedItemId } = useDeleteRequest(
    API_ENDPOINT.establishments,
  );
  const { dispatch } = React.useContext(Context);

  React.useEffect(() => {
    setEstablishmentsList(results.data.reverse());
  }, [results]);

  React.useEffect(() => {
    if (removed && removedItemId) {
      setEstablishmentsList(
        establishmentsList.filter(element => {
          return element.id !== removedItemId;
        }),
      );
      dispatch({
        type: Types.Dislike,
        payload: {
          id: removedItemId,
        },
      });
    }
  }, [removed, removedItemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Block>
        <VerticalSpacer topSpaceDesktop="m" bottomSpaceDesktop="m">
          <Flex direction="row" align="center">
            <FlexKid>
              <ButtonLink
                variant="primary"
                size="small"
                onClick={e => {
                  e.preventDefault();
                  history.push('/dashboard/establishments/new');
                }}
              >
                Add New Establishment {plus}
              </ButtonLink>
            </FlexKid>
          </Flex>
        </VerticalSpacer>
        {loading ? (
          <Loader />
        ) : (
          <>
            {!!establishmentsList && (
              <VerticalSpacer topSpaceDesktop="l">
                {establishmentsList.map(establishment => (
                  <EditableWrapper key={establishment.id}>
                    <DeleteButton
                      variant="tertiaryVariant"
                      size="small"
                      icon
                      removed={removed && establishment.id === removedItemId}
                      aria-label="Delete establishment"
                      onClick={e => {
                        e.preventDefault();
                        action(establishment.id);
                      }}
                    >
                      {trash}
                    </DeleteButton>
                    <HotelCardVariant
                      miniCard
                      card={establishment}
                      busy={deleting && establishment.id === removedItemId}
                      removed={removed && establishment.id === removedItemId}
                    />
                  </EditableWrapper>
                ))}
              </VerticalSpacer>
            )}
          </>
        )}
      </Block>
    </>
  );
};

export default EditableEstablishmentsList;
