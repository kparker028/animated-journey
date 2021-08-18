import React, { FC } from "react";
import "./image.css";

type ImageProps = {
	imageSource: string;
	width?: string;
	height?: string;
};

export const Image: FC<ImageProps> = ({ imageSource, width, height }) => {
	return (
		<div
			className='image-container'
			style={{
				width: `${width}px` ?? "400px",
				height: `${height}px` ?? "400px",
			}}
		>
			<img src={imageSource} alt='#' />
		</div>
	);
};
