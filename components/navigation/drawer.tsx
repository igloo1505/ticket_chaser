import React from 'react'


import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { setDrawerOpen } from '#/state/slices/ui';

const connector = connect((state: RootState, props: any) => ({
    open: state.UI.drawer.open,
    props: props
}))


interface DrawerProps {
    open: boolean
}

const Drawer = connector((props: DrawerProps) => {
    const setDrawer = (open: boolean) => {
        store.dispatch(setDrawerOpen(open))
    }
    return (

  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>    
    </ul>
    
  </div>
    )
})


Drawer.displayName = "Drawer"


export default Drawer;
