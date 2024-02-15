import { Link } from 'react-router-dom';
import { SIDENAV_ITEMS } from '../../constants/menu';
import {
	StyleTitle,
	StyledAside,
	StyledLi,
	StyledLinkTitle,
	StyledSubMenuUl,
	StyledTitleDiv
} from './styles';

const SideBar = () => {
	return (
		<StyledAside>
			<ul>
				{SIDENAV_ITEMS.map(item => (
					<StyledLi key={item.id}>
						{item.subMenus.length > 0 ? (
							<>
								<StyleTitle to={item.path}>
									<img src={item.icon} alt='' />
									<StyledTitleDiv>
										<span>{item.title}</span>
										<img
											src='/assets/icons/chevron-down.svg'
											alt='chevron-down icon'
										/>
									</StyledTitleDiv>
								</StyleTitle>
								<StyledSubMenuUl>
									{item.subMenus.map(subMenu => (
										<li key={subMenu.id}>
											<Link to={subMenu.path}>
												<span>{subMenu.name}</span>
											</Link>
										</li>
									))}
								</StyledSubMenuUl>
							</>
						) : (
							<StyledLinkTitle to={item.path}>
								<img src={item.icon} alt='' />
								<StyledTitleDiv>
									<span>{item.title}</span>
								</StyledTitleDiv>
							</StyledLinkTitle>
						)}
					</StyledLi>
				))}
			</ul>
		</StyledAside>
	);
};

export default SideBar;
