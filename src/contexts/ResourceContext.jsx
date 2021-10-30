import { createContext, useState } from "react";
import { documentExplorer } from "../api/document-explorer";

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

  const tree = async () => {
    const result = await documentExplorer.tree(settings.server);
    setSettings({ ...settings, folder: result });
  };

  const search = async (folder) => {
    const result = await documentExplorer.search(settings.server, folder);
    setSettings({ ...settings, files: result });
  };

  return (
    <ResourceContext.Provider value={{ ...settings, tree, search }}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContext;
