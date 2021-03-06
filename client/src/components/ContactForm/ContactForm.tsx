import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  StyledInput,
  StyledLabelWrapper,
  StyledTextArea,
  Form,
  StyledLabel,
  ErrorMessage,
} from '../FormElement';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import ContactSchema from './contact.schema';
import postData from '../../util/postData';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, Section, Flex } from '../Layout';
import Busy from '../Loader/Busy';

interface Props {
  formTitle?: string;
}

const ContactForm: React.FC<Props> = ({ formTitle }) => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: ContactSchema,
  });

  const [posting, setPosting] = React.useState<boolean>(false);

  let history = useHistory();

  async function sendForm(data: Object, endpoint: 'contact') {
    setPosting(true);
    const response = await postData({
      endpoint: endpoint,
      data: data,
    });

    if (response.status === 200) {
      setPosting(false);
      history.push('/contact-success');
    }
  }

  return (
    <Section>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Flex direction="column">
              {!!formTitle && <Typography element="h2" variant="h2" content={formTitle} />}
              <Busy busy={posting}>
                <Form
                  onSubmit={handleSubmit((data: Object) => sendForm(data, 'contact'))}
                  noValidate
                >
                  <StyledLabel>
                    <StyledLabelWrapper>
                      Name <span>*</span>
                    </StyledLabelWrapper>
                    <StyledInput
                      type="text"
                      name="clientName"
                      placeholder="Your name"
                      ref={register}
                      required
                    />
                  </StyledLabel>
                  {/* 
      // @ts-ignore */
                  errors.clientName && <ErrorMessage>{errors.clientName.message}</ErrorMessage>}
                  <StyledLabel>
                    <StyledLabelWrapper>
                      Email <span>*</span>
                    </StyledLabelWrapper>
                    <StyledInput
                      type="email"
                      name="email"
                      placeholder="Your email"
                      ref={register}
                      required
                    />
                  </StyledLabel>
                  {/* 
      // @ts-ignore */
                  errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                  <StyledLabel>
                    <StyledLabelWrapper>
                      Message <span>*</span>
                    </StyledLabelWrapper>
                    <StyledTextArea name="message" placeholder="Your message" ref={register} />
                  </StyledLabel>
                  {/* 
      // @ts-ignore */
                  errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                  <Button size="large" variant="primary" type="submit" aria-label="Submit form">
                    {posting ? 'Sending ...' : 'Send'}
                  </Button>
                </Form>
              </Busy>
            </Flex>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default ContactForm;
