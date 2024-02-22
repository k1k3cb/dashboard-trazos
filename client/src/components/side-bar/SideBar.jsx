import { useContext } from 'react';
import { SIDENAV_ITEMS } from '../../constants/menu';
import { USER_ROLES } from '../../constants/roles';
import { AuthContext } from '../../contexts/AuthContext';
import SidebarCategory from '../sidebar-category/SidebarCategory';
import { StyledAside } from './styles';

const SideBar = () => {
	const { userData } = useContext(AuthContext);

	const userRoles = userData.roles.map(role => role.name);


	return (
		<StyledAside>
			<ul>
				{userRoles.includes(USER_ROLES.ADMIN) &&
					Object.values(SIDENAV_ITEMS).map(item => (
						<SidebarCategory category={item} key={item.id} />
					))}
			</ul>

			<ul>
				{userRoles.includes(USER_ROLES.LIBRARY_EDITOR) && (
					<SidebarCategory category={SIDENAV_ITEMS.LIBRARY} />
				)}
			</ul>

			<ul>
				{userRoles.includes(USER_ROLES.INVENTARY_EDITOR) && (
					<>
						<SidebarCategory category={SIDENAV_ITEMS.INVENTARY} />
						<SidebarCategory category={SIDENAV_ITEMS.CALENDAR} />
					</>
				)}
			</ul>
		</StyledAside>
	);
};

export default SideBar;
