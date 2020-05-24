import * as React from 'react';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../../components/Typography';

interface Props {}

const CustomerService: React.FC<Props> = () => {
  return (
    <>
      <Section>
        <Card coloredTitle>
          <Typography variant="h2" element="h2" content="Customer Service" />
        </Card>
      </Section>
    </>
  );
};

export default CustomerService;
