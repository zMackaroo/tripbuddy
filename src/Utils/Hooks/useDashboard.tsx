/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { chatSession } from '@Utils/AIService/Gemini';

import { GEMINI_PROMPT } from '@Utils/Constant';
import { Store } from '@Utils/Context/Context';

function useDashboard() {
  const { updateStore, application, geminiParamsConfig }: any =
    useContext(Store);

  const fieldValidate =
    geminiParamsConfig.destination !== '' &&
    geminiParamsConfig.days !== 0 &&
    geminiParamsConfig.budget !== 0 &&
    geminiParamsConfig.pax !== 0;

  const transformedPrompt = (geminiParamsConfig: any) => {
    const { destination, days, pax, budget, currency } = geminiParamsConfig;
    const data = GEMINI_PROMPT.replace('{destination}', destination)
      .replace('{days}', days)
      .replace('{pax}', pax)
      .replace('{budget}', budget)
      .replace('{currency}', currency)
      .replace('{destination}', destination)
      .replace('{destination}', destination)
      .replace('{destination}', destination)
      .replace('{destination}', destination)
      .replace('{currency}', currency);

    return data;
  };

  const handleGroupSelection = (pax: string, selectedTravelGroup: string) => {
    updateStore({
      application: {
        ...application,
        selectedTravelGroup,
      },
      geminiParamsConfig: {
        ...geminiParamsConfig,
        pax,
      },
    });
  };

  const dismissModal = () => {
    updateStore({
      application: {
        ...application,
        showModal: !application.showModal,
      },
    });
  };

  const showBackDrop = (isFetching: boolean, showModal: boolean) => {
    updateStore({
      application: {
        ...application,
        isFetching,
        showModal,
      },
    });
  };

  const handleSubmit = async () => {
    showBackDrop(true, false);
    await chatSession
      .sendMessage(transformedPrompt(geminiParamsConfig))
      .then(({ response }) => {
        try {
          updateStore({
            geminiGenerativeResult: JSON.parse(response.text()),
          });
          showBackDrop(false, true);
        } catch (er) {
          alert('Encountered an error with GeminiAI, Please try again....');
          console.log(er);
          showBackDrop(false, false);
        }
      });
  };
  return {
    fieldValidate,
    handleSubmit,
    handleGroupSelection,
    dismissModal,
  };
}

export default useDashboard;
