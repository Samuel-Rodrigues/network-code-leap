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
  Title,
  UserIcon,
  Wrapper,
} from './styles';

type Props = {
  isSubmitting: boolean;
  handleDelete: () => void;
  isDeleting: boolean;
};

const isIOS = Platform.OS === 'ios';

const PostForm = ({ isSubmitting, handleDelete, isDeleting }: Props) => {
  const { values, setFieldValue, submitForm, errors, touched } =
    useFormikContext<Partial<Career>>();

  const { keyboardShow } = useKeyboardListener();

  const isEdit = !!values?.id;

  return (
    <Wrapper scrollEnable>
      <>
        <If condition={!isIOS}>
          <BoxBackButton>
            <BackButton />
          </BoxBackButton>
        </If>
        <Header>
          <UserIcon />
          <Title>{isEdit ? 'Edit item' : `What's on your mind?`}</Title>
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
            title={isEdit ? 'Save' : 'Create'}
            onPress={submitForm}
            isSubmitting={isSubmitting}
          />
          <If condition={!keyboardShow && !!values?.id}>
            <ButtonSubmit
              title="Delete"
              onPress={handleDelete}
              isSubmitting={isDeleting}
              variant="attention"
            />
          </If>
        </BoxButtonSubmit>
      </>
    </Wrapper>
  );
};

export default PostForm;
