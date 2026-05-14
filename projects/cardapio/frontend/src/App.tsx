import { useCallback, useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { usePratoData } from './hooks/usePratoData';
import { CreateModal } from './components/create-modal/create-modal';
//---
function App() {
  const { data } = usePratoData();
  const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
  //---
  const handleOpenModal = useCallback(():void => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  },[])
  //---
  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map(pratoDTO => <Card key={pratoDTO.prato_id} prato_title={pratoDTO.prato_title}
                                                             prato_image={pratoDTO.prato_image}
                                                             prato_price={pratoDTO.prato_price} />)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
