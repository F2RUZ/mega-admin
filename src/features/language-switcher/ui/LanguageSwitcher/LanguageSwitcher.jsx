// src/features/language-switcher/ui/LanguageSwitcher/LanguageSwitcher.jsx

"use client";

import React, { useContext, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { LanguageContext } from "../../LangProvider";

export const LanguageSwitcher = () => {
  const { lang, changeLang, availableLangs } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (newLang) => {
    changeLang(newLang);
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls={open ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        color="inherit"
        size="small"
      >
        {lang.toUpperCase()} {/* Joriy tilni ko'rsatadi (UZ, RU, EN) */}
      </Button>
      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {availableLangs.map((l) => (
          <MenuItem
            key={l}
            onClick={() => handleLangChange(l)}
            selected={l === lang}
          >
            {l.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
