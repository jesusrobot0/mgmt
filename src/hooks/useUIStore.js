import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export function useUIStore() {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    return isDateModalOpen ? closeDateModal() : openDateModal();
  };

  return {
    // props
    isDateModalOpen,
    // methods
    openDateModal,
    closeDateModal,
    toggleDateModal,
  };
}
