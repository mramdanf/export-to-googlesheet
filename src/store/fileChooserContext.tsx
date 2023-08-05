import { ReactElement, createContext, useContext, useState } from 'react';

const useFileChooserController = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [disableExport, setDisableExport] = useState<boolean>(false);

  return {
    selectedFile,
    disableExport,
    setSelectedFile,
    setDisableExport
  };
};

const FileChooserContext = createContext<ReturnType<typeof useFileChooserController>>({
  selectedFile: undefined,
  disableExport: false,
  setSelectedFile: () => {},
  setDisableExport: () => {}
});

export const FileChooserProvider = ({ children }: { children: ReactElement }) => (
  <FileChooserContext.Provider value={useFileChooserController()}>
    {children}
  </FileChooserContext.Provider>
);

export const useFileChooser = () => useContext(FileChooserContext);
