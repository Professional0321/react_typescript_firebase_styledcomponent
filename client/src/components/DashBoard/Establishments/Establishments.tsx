import * as React from 'react';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import EstablishmentForm from './EstablishmentForm';
import { VerticalSpacer } from '../../Layout';
import { HotelCardVariant } from '../../HotelCards/';
import { Context } from '../../../context/GlobalContext';
import Loader from '../../Loader/Loader';
import SearchHotel from '../../SearchHotel/SearchHotel';

interface Props {}

const Establishments: React.FC<Props> = () => {
  const localContext = React.useContext(Context);

  return (
    <>
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Manage Establishments" />
        </Card>
      </Section>
      <Section>
        {/* <VerticalSpacer>
          <Card>
            <EstablishmentForm />
          </Card>
        </VerticalSpacer> */}
        <Card>
          <SearchHotel />
        </Card>
        {/* <VerticalSpacer>
          <Card>
            {!!localContext.loading && <Loader />}
            {(localContext.default || []).map(hotel => (
              <HotelCardVariant key={hotel.id} card={hotel} miniCard />
            ))}
          </Card>
        </VerticalSpacer> */}
      </Section>
    </>
  );
};

export default Establishments;
