import { useRouter } from 'next/router';
import styles from "./styles.module.css";

const ProjectIdPage = () => {
    const router = useRouter();
  const { id } = router.query;

	return <div>ProjectIdPage: {id}</div>;
};

export default ProjectIdPage;
