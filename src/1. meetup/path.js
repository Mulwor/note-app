import React from 'react';
import { useStore } from 'effector-react';
import { $modalVisibility } from './effector';
import { setModalVisibility } from './effector';
import { $todos, getDataFx, $dataLoading } from './effector';

export function Path() {
  const isVisible = useStore($modalVisibility);
  const isLoading = useStore($dataLoading)
  //  Еще один варик const isLoading = useStore(getDataFx.pending);
  const data = useStore($todos)

  return (
    <>
      <Button color="primary" 
              variant="contained" 
              onClick={() => setModalVisibility(true)}>
                    Открыть модальное окно
      </Button>

      <DataListModal
        isVisible={isVisible}
        isLoading={isLoading}
        onSubmit={getDataFx}
        onClose={setModalVisibility(false)}
      />

      <DataList isLoading={isLoading} data={data} />
    </>
  );
}
