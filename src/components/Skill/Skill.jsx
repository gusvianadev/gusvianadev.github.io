import SkillSty from './Skill.styles';

const Skill = ({ icon, skill }) => (
	<SkillSty>
		{icon}
		<p>{skill}</p>
	</SkillSty>
);

export default Skill;
