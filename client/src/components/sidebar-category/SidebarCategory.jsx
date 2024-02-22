import {
	StyledLi,
	StyledLinkTitle,
	StyledSectionSubmenu,
	StyledTitleDiv
} from './styles';

const SidebarCategory = ({ category }) => {
	
	const { id } = category;
	const { title, icon, path, subMenus } = category.section;
	const linkContent = (
		<>
			<img src={icon} alt='' />
			<StyledTitleDiv>
				<span>{title}</span>
			</StyledTitleDiv>
		</>
	);
	return (
		<StyledLi key={id}>
			{path ? (
				<StyledLinkTitle to={path}>{linkContent}</StyledLinkTitle>
			) : (
				<>
					<StyledSectionSubmenu>
						{linkContent}
						<img src='/assets/icons/chevron-down.svg' alt='chevron-down icon' />
					</StyledSectionSubmenu>
					<ul>
						{subMenus.map(submenu => (
							<li key={submenu.id}>
								<StyledLinkTitle to={submenu.path}>
									<span>{submenu.name}</span>
								</StyledLinkTitle>
							</li>
						))}
					</ul>
				</>
			)}
		</StyledLi>
	);
};

export default SidebarCategory;
