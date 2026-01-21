import { useState } from "react";
import { usePage } from "../Context/PageContext";
import GamePlay from "../Pages/Gameplay";

export default function useMain() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const { setPage } = usePage();

  const handleSelect = (option) => {
    setSelectedOption(option);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMoveOn = () => {
    setPage(<GamePlay selected={selectedOption.id} />);
  };

  const btns = [
    {
      id: 0,
      name: "Adverbs - Comparative",
      color: "primary",
    },
    {
      id: 1,
      name: "Adverbs Superlative",
      color: "error",
    },
    {
      id: 2,
      name: "Irregular Verbs (Past Simple)",
      color: "success",
    },
    {
      id: 3,
      name: "Irregular Verbs (Past Participle)",
      color: "warning",
    },
  ];

  return {
    selectedOption,
    setSelectedOption,
    open,
    setOpen,
    setPage,
    handleSelect,
    handleClose,
    handleMoveOn,
    btns,
  };
}
