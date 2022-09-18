import React from 'react';
import { useFormikContext } from 'formik';

import { Body, ButtonSubmit, Input, Title, WrapperForm } from './styles';

type Props = {
  isSubmitting: boolean;
  formTab: LoginType;
  toggleValidateAfterSubmit: () => void;
};

const FormLogin = ({
  isSubmitting,
  formTab,
  toggleValidateAfterSubmit,
}: Props) => {
  const { values, setFieldValue, submitForm, errors, touched } =
    useFormikContext<FormLogin>();
  const { title } = formTab;

  const handleMidwaySubmit = async () => {
    await Promise.resolve();
    toggleValidateAfterSubmit();
    submitForm();
  };

  return (
    <WrapperForm>
      <Body>
        <Title>{title}</Title>

        <Input
          error={!!touched?.username ? errors?.username : ''}
          value={values.username}
          placeholder="Please enter your username"
          iconName="user"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setFieldValue('username', value)}
        />

        <ButtonSubmit
          title="Enter"
          onPress={handleMidwaySubmit}
          isSubmitting={isSubmitting}
        />
      </Body>
    </WrapperForm>
  );
};
export default FormLogin;
