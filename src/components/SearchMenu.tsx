import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Loading from './Loading';
import GET_SEARCH from 'modules/apollo/queries/getSearch';
import { GetSearch, GetSearchVars, Searchable } from 'types';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { artist } from 'routes';
import routeWithParams from 'utils/routeWithParams';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

type Props = {
  anchorEl: null | HTMLElement,
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  query: string
}

export default function SearchMenu({anchorEl, setAnchorEl, query}: Props) {
  const [search, {loading, error, data}] = useLazyQuery<GetSearch, GetSearchVars>(GET_SEARCH)

  useEffect(() => {
    search({
      variables: {
        query: query
      }
    })
  }, [query])

  function handleClose() {
    setAnchorEl(null);
  }
  console.log({loading, error, data})
  if(error) console.log("error", error)

  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        autoFocus={false}
        disableEnforceFocus
        disableRestoreFocus
        disableAutoFocus
        disableAutoFocusItem
      >
          {loading && <Loading/>}
          {data && data.search && data.search.edges &&
          data.search.edges
          .map(data => data.node)
          .map((result: Searchable) => (
            <StyledMenuItem key={result.displayLabel}>
              <ListItemText>
                <Link to={result.href}>
                  <img src={result.imageUrl} style={{width: 25}}/>
                  {result.displayLabel}
                </Link>
              </ListItemText>
            </StyledMenuItem>
          ))}
      </StyledMenu>
    </div>
  );
}