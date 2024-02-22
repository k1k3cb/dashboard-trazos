import { SIDENAV_ITEMS } from '../../constants/menu';
import SidebarCategory from '../sidebar-category/SidebarCategory';
import { StyledAside } from './styles';

const SideBar = () => {
	
	return (
		<StyledAside>
			<ul>
				{SIDENAV_ITEMS.map(item => (
					<SidebarCategory category={item} key={item.id} />
				))}
			</ul>
		</StyledAside>
	);
};

export default SideBar;
