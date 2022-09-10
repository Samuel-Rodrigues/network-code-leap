import React from 'react';
import { useFormikContext } from 'formik';
import { Platform } from 'react-native';

import { BackButton, If } from '~/components';
import { useKeyboardListener } from '~/hooks';

import {
  BoxBackButton,
  BoxButtonSubmit,
  BoxInputs,
  ButtonSubmit,
  Header,
  Input,
  TextAreaInput,
  UserIcon,
  UserName,
  Wrapper,
} from './styles';

type Props = {
  isSubmitting: boolean;
  username?: string;
  handleDelete: () => void;
  isDeleting: boolean;
};

const isIOS = Platform.OS === 'ios';

const PostForm = ({
  isSubmitting,
  handleDelete,
  username,
  isDeleting,
}: Props) => {
  const { values, setFieldValue, submitForm, errors, touched } =
    useFormikContext<Partial<Career>>();

  const { keyboardShow } = useKeyboardListener();

  return (
    <Wrapper scrollEnable>
      <If condition={!isIOS}>
        <BoxBackButton>
          <BackButton />
        </BoxBackButton>
      </If>
      <Header>
        <UserIcon />
        <UserName>{username}</UserName>
      </Header>
      <BoxInputs>
        <Input
          label="Title"
          error={touched?.title ? errors?.title : ''}
          placeholder="Title"
          value={values.title}
          onChangeText={(value) => setFieldValue('title', value)}
        />
        <TextAreaInput
          label="Content"
          error={touched?.content ? errors?.content : ''}
          placeholder="Content"
          value={values.content}
          onChangeText={(value) => setFieldValue('content', value)}
        />
      </BoxInputs>
      <BoxButtonSubmit>
        <ButtonSubmit
          title="Salvar"
          onPress={submitForm}
          isSubmitting={isSubmitting}
        />
        <If condition={!keyboardShow && !!values?.id}>
          <ButtonSubmit
            title="Deletar"
            onPress={handleDelete}
            isSubmitting={isDeleting}
            variant="attention"
          />
        </If>
      </BoxButtonSubmit>
    </Wrapper>
  );
};

export default PostForm;
