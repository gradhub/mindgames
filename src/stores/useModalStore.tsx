import { create } from 'zustand';

type ModalContent = React.ReactNode

type Variables = {
    activeModal: string | null,
    modalsContents: Record<string, ModalContent>,
}

type Actions = {
    openModal: (id: string, content: ModalContent) => void,
    closeModal: () => void,
}

export const useModalStore = create<Variables & Actions>((set) => ({
  activeModal: null,
  modalsContents: {},
  openModal: (id, content) =>{
    console.log('Opening modal:', id)
    console.log('Modal content:', content)
    set((state) => ({
      activeModal: id,
      modalsContents: { ...state.modalsContents, [id]: content },
    }))},
  closeModal: () =>
    set(() => ({
      activeModal: null,
    })),
}));
