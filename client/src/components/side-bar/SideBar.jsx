import { Link } from 'react-router-dom';
import { SIDENAV_ITEMS } from '../../constants/menu';
import { StyledAside, StyledLinkTitle, StyledTitleDiv } from './styles';

const SideBar = () => {
	return (
		<StyledAside>
			<ul>
				{SIDENAV_ITEMS.map(item => (
					<li key={item.id}>
						<StyledLinkTitle to={item.path} href={item.path}>
							<span>
								<img src={item.icon} alt='' />
							</span>
							<StyledTitleDiv>
								<span>{item.title}</span>
								{item.subMenus.length > 0 && (
									<i>
										<img src='assets/icons/chevron-down.svg' alt='' />
									</i>
								)}
							</StyledTitleDiv>
						</StyledLinkTitle>
						{item.subMenus.length > 0 && (
							<ul>
								{item.subMenus.map(subMenu => (
									<li key={subMenu.id}>
										<Link to={subMenu.path}>
											<span>{subMenu.name}</span>
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</StyledAside>
	);
};

export default SideBar;
