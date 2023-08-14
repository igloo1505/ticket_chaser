import clsx from 'clsx';


const NavbarTitle = ({ className }: { className?: string }) => {
    return (
        <div className={clsx('text-xl text-base-content font-bold tracking-wider pl-2', className && className)}>SafeStub</div>
    )
}


NavbarTitle.displayName = "NavbarTitle"


export default NavbarTitle;
