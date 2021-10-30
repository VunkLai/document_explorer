import { createContext, useEffect, useState } from "react";
import API from "../api/document-explorer";

const defaultSettings = {
  server: "http://localhost",
  folder: {},
  files: {},
};

const ResourceContext = createContext({
  ...defaultSettings,
  // platform: 'AJAX',
  tree: () => Promise.resolve(),
  search: () => Promise.resolve(),
});

export const ResourceProvider = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    setSettings({ ...defaultSettings });
  }, []);

  const tree = async () => {
    const { result } = await API.tree(settings.search);
    setSettings({ folder: result });
  };

  const search = async (folder) => {
    const { result } = await API.search(settings.server, folder);
    setSettings({ files: result });
  };

  return (
    <ResourceContext.Provider value={{ ...settings, tree, search }}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContext;
