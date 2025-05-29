import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Inclusion {
  name: string;
  description?: string;
}

interface CardCarPriceModalProps {
  open: boolean;
  onClose: () => void;
  inclusions: Inclusion[];
  rateName?: string;
}

export const CardCarPriceModal = ({
  open,
  onClose,
  inclusions,
  rateName = "Inclusive Light (H8)",
}: CardCarPriceModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: "18px" },
      }}
    >
      <div className="p-[30px] bg-white">
        <DialogTitle className="font-bold text-lg text-gray-800 pb-0 flex items-center justify-between">
          Detalle de la tarifa
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <hr
          className="border-t border-gray-200 my-3 mx-6"
          style={{ borderWidth: 1.5 }}
        />
        <DialogContent className="">
          <div className="font-bold  text-gray-800 mb-3">{rateName}</div>
          <ul className="flex flex-col gap-2">
            {inclusions.map((inc, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-[14px] text-gray-600"
              >
                <span className="flex items-center gap-3">
                  <img src="/imgs/icons_logos/check-logo.svg" alt="check" />
                  {inc.name}
                </span>
                <ExpandMoreIcon className="text-gray-400" fontSize="small" />
              </li>
            ))}
          </ul>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default CardCarPriceModal;
