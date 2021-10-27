import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { alpha, styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import DescriptionIcon from "@mui/icons-material/Description";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

// function CloseSquare(props) {
//   return (
//     <SvgIcon
//       className="close"
//       fontSize="inherit"
//       style={{ width: 14, height: 14 }}
//       {...props}
//     >
//       {/* tslint:disable-next-line: max-line-length */}
//       <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
//     </SvgIcon>
//   );
// }

// fake API
const folders = {
  root: ["other document"],
  1: ["Document - 1a", "Document - 1b"],
  "2a": ["Document - 2a1", "Document - 2a2", "Document - 2a3"],
  "2b1": ["Document - 2b1a", "Document - 2b1b"],
};

const data = {
  id: "root",
  name: "Main",
  children: [
    {
      id: "1",
      name: "Folder - 1",
      children: [
        {
          id: "1a",
          name: "Document - 1a",
        },
        {
          id: "1b",
          name: "Document - 1b",
        },
      ],
    },
    {
      id: "2",
      name: "Folder - 2",
      children: [
        {
          id: "2a",
          name: "Folder - 2a",
          children: [
            {
              id: "2a1",
              name: "Document - 2a1",
            },
            {
              id: "2a2",
              name: "Document - 2a2",
            },
            {
              id: "2a3",
              name: "Document - 2a3",
            },
          ],
        },
        {
          id: "2b",
          name: "Folder - 2b",
          children: [
            {
              id: "2b1",
              name: "Folder - 2b1",
              children: [
                {
                  id: "2b1a",
                  name: "Document - 2b1a",
                },
                {
                  id: "2b1b",
                  name: "Document - 2b1b",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const StyledTreeItem = styled((props) => <TreeItem {...props} />)(
  ({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      "& .close": {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  })
);

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  height: "calc(100% - 64px) !important",
  width: "100%",
  justifyContent: "center",
  alignContent: "stretch",
}));

const Left = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "30%",
}));

const Right = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "70%",
}));

export default function CustomizedTreeView() {
  const [folder, setFolder] = React.useState([]);

  const handleClick = (event, nodeIds) => {
    let expandedId = nodeIds[0];
    if (expandedId === "root") {
      expandedId = nodeIds[1];
    }
    console.log(expandedId);
    setFolder(folders[expandedId] ? folders[expandedId] : []);
  };

  const renderTree = (nodes) => (
    <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  return (
    <Container>
      <Left>
        <TreeView
          aria-label="customized"
          defaultExpanded={["1"]}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<DescriptionIcon />}
          onNodeToggle={handleClick}
          sx={{ height: "100%", flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          {renderTree(data)}
        </TreeView>
      </Left>
      <Divider orientation="vertical" variant="middle" />
      <Right>
        {folder.length === 0 ? "請點選左側資料夾" : "資料夾內含文件："}
        <List>
          {folder.map((f) => {
            return (
              <ListItem key={f}>
                <ListItemText>{f}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Right>
    </Container>
  );
}
