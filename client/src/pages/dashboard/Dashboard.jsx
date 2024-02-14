import CardBody from '../../components/UI/card-body/CardBody';
import { StyledFlex } from './styles';

const Dashboard = () => {
	return (
		<main>
			<h3>Dashboard</h3>
			<StyledFlex>
				<CardBody>
					<h5>Last actions</h5>
					<div>
						<span>date: 16/2/24 </span>
						<span>action: edit</span>
					</div>
				</CardBody>
				<CardBody>
					<h5>Últimos libros añadidos</h5>
					<div>
						<span>date: 16/2/24 </span>
						<span>titulo: El quijote</span>
						<span>autor: Cervantes</span>
					</div>
				</CardBody>
			</StyledFlex>
		</main>
	);
};

export default Dashboard;
