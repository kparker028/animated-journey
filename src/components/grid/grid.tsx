import React, { FC } from "react";
import "./grid.css";
import { gridImages } from "../../pictures";
import { Image } from "../image/image";

type Data = typeof gridImages;

type GridProps = {};

export const Grid: FC<GridProps> = () => {
	const getImage = (pictures: Data) => {
		let picture = "";
		for (let i = 0; i <= pictures.length; i++) {
			if (typeof pictures[i].url === "string") {
				picture = pictures[i].url;
			}
			break;
		}
		return picture;
	};

	return (
		<div className='grid-container'>
			<h1 className='grid-title'>HeyLo</h1>
			<div className='holding'>
				<Image imageSource={getImage(gridImages)} />
			</div>
		</div>
	);
};
