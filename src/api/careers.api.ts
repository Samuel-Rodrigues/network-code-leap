import { codeLeapApi } from './request';

export const getCareersReq = async (
  offset?: number,
): Promise<CareersFetchResponse> => {
  const { data } = await codeLeapApi.get<CareersFetchResponse>(
    `/careers/?offset=${offset}&limit=10`,
  );
  return data;
};

export const createCareerReq = async (
  career: Partial<Career>,
): Promise<Career> => {
  const { data } = await codeLeapApi.post<Career>('/careers/', career);
  return data;
};

export const editCareerReq = async ({
  id,
  content,
  title,
}: Partial<Career>): Promise<Career> => {
  const { data } = await codeLeapApi.patch<Career>(`/careers/${id}/`, {
    content,
    title,
  });
  return data;
};

export const deleteCareerReq = async (id: number): Promise<void> =>
  await codeLeapApi.delete(`/careers/${id}/`);
