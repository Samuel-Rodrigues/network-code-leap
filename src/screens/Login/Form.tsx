import React from 'react';
import { useFormikContext } from 'formik';

import { If } from '~/components';
import { FORM_LOGIN_TYPE } from '~/utils';

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
  const { title, type } = formTab;

  const handleMidwaySubmit = async () => {
    setFieldValue('formType', type);
    await Promise.resolve();
    toggleValidateAfterSubmit();
    submitForm();
  };

  return (
    <WrapperForm>
      <Body>
        <Title>{title}</Title>
        <If condition={type !== FORM_LOGIN_TYPE.SIGN_IN}>
          <Input
            error={!!touched?.email ? errors?.username : ''}
            value={values.username}
            placeholder="Full Name"
            iconName="user"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => setFieldValue('username', value)}
          />
        </If>
        <If condition={type !== FORM_LOGIN_TYPE.GUEST}>
          <>
            <Input
              error={!!touched?.email ? errors?.email : ''}
              value={values.email}
              placeholder="E-mail"
              iconName="mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(value) => setFieldValue('email', value)}
            />
            <Input
              error={!!touched?.password ? errors?.password : ''}
              value={values.password}
              placeholder="Password"
              iconName="lock"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(value) => setFieldValue('password', value)}
            />
          </>
        </If>
        <ButtonSubmit
          title={type}
          onPress={handleMidwaySubmit}
          isSubmitting={isSubmitting}
        />
      </Body>
    </WrapperForm>
  );
};
export default FormLogin;
