export default function NavItem({ dir, scheme }) {

    let dirs = {
        horizontal: "justify-around items-center",
        vertical: "flex-col space-y-5"
    }

    let pickedDir = dirs[dir];

    let addScheme = {
        light: "hover:text-white text-white text-opacity-70",
        dark: "text-black"
    }

    let pickedScheme = addScheme[scheme];

    return (
        <ul className={`flex text-lg ${pickedDir}`}>
            <li><a href="#profile" className={`hover:underline transition-all ease-in-out ${pickedScheme}`} >Profile</a></li>
            <li><a href="#skill" className={`hover:underline transition-all ease-in-out ${pickedScheme}`} >Skills</a></li>
            <li><a href="#project" className={`hover:underline transition-all ease-in-out ${pickedScheme}`} >Projects</a></li>
            <li><a href="#contact" className={`hover:underline transition-all ease-in-out ${pickedScheme}`} >Contact</a></li>
        </ul>
    );
}