import * as React from 'react';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import { UserContext } from '../../../context/UserContext';

interface Props {}

const Account: React.FC<Props> = () => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <Section>
        <Card>
          {!!user.name && <Typography variant="h2" element="h2" content={user.name} />}
          {!!user.email && <Typography variant="h5" element="h3" content={user.email} />}
        </Card>
      </Section>
    </>
  );
};

export default Account;