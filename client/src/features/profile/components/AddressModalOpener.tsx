import ModalOpener from "../../../components/ModalOpener";
import { TextButton } from "../../../components/Buttons";
import useAddressForm from "../hooks/AddressForm";

const AddressModalOpener = () => {
  const { handleSubmit } = useAddressForm();

  return (
    <ModalOpener
      action={handleSubmit}
      opener={(open: () => void) => (
        <TextButton
          onClick={open}
          text="Change"
        />
      )}
    >
      <div className="flex flex-col gap-4">
        
      </div>
    </ModalOpener>
  );
};

export default AddressModalOpener;
