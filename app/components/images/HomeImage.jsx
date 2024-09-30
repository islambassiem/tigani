import Image from 'next/image';

const HomeImage = () => {
	return (
		<div>
			<Image
				src="/my-image.jpg"
				alt="A beautiful landscape"
				width={800}
				height={500}
				layout="responsive"
			/>
		</div>
	);
};

export default HomeImage;