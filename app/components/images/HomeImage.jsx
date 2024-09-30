import Image from 'next/image';

const HomeImage = () => {
	return (
		<div className='h-[300px]'>
			<Image
				src="/background.jpg"
				alt="A beautiful landscape"
				width={800}
				height={400}
				layout="responsive"
			/>
		</div>
	);
};

export default HomeImage;