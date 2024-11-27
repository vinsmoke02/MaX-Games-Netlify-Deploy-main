import React, { useState, useEffect } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer;
        if (loading) {
            timer = setTimeout(() => setLoading(false), 2800);
        }
        return () => clearTimeout(timer);
    }, [loading]);

    return (
        <>
            {loading && (
                <div className='loaderx'>
                    {/*COPY :  SVG from Codepen */}
                    <svg id="cubes" width={512} height={512} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scale(1.66, 1) rotatex(45deg) rotateZ(45deg)' }}>
                        <rect width={512} height={512} fill="#000" />
                        <use href="#hole" fill="url(#grad)" x={256} y={256} transform="rotate(0, 256, 256)" />
                        <use href="#hole" fill="url(#grad2)" x={256} y={256} transform="rotate(90, 256, 256)" />
                        <use href="#hole" fill="url(#grad3)" x={256} y={256} transform="rotate(180, 256, 256)" />
                        <use href="#hole" fill="url(#grad4)" x={256} y={256} transform="rotate(270, 256, 256)" />
                        <defs>
                            <g id="hole">
                                <path>
                                    {/* BASIC SHAPE; WILL BE COPIED AND ROTATED 4 TIMES */}
                                    <animate attributeName="d" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="M10 10 L110 10 L110 110 L10 110Z;
						M10 10 L110 10 L110 210 L10 210Z;
						M10 110 L110 110 L110 210 L10 210Z;
						M-110 110 L110 110 L110 210 L-110 210Z;
						M-110 110 L-10 110 L-10 210 L-110 210Z;
						M-110 10 L-10 10 L-10 210 L-110 210Z;
						M-110 10 L-10 10 L-10 110 L-110 110Z;
						M-110 10 L-10 10 L-10 110 L-110 110Z" />
                                    {/* FAKE ILLUMINATION CHANGES */}
                                    <animate attributeName="opacity" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="0.9; 0.7; 0.9; 0.7; 0.9; 0.7; 0.7; 0.9" />
                                </path>
                            </g>
                            <linearGradient id="grad" gradientTransform="rotate(90 60 60)" x={10} x2={110} y1={10} y2={110} gradientUnits="userSpaceOnUse">
                                <stop offset={0} stopColor="#b3c0c5" />
                                <stop offset="0.25" stopColor="#96a5ac" />
                                <stop offset="0.49" stopColor="#6a7a86" />
                                <stop offset="0.5" stopColor="#5c6f7d" />
                                <stop offset="0.75" stopColor="#6a7b88" />
                                <stop offset={1} stopColor="#5c6f7d" />
                                <animate attributeName="x1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;10;10;130;130;130;130;130" />
                                <animate attributeName="x2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;110;110;230;230;230;230;230" />
                                <animate attributeName="y1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;10;110;110;110;10;10;10" />
                                <animate attributeName="y2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;110;210;210;210;110;110;110" />
                            </linearGradient>
                            <linearGradient id="grad2" gradientTransform="rotate(180 60 60)" x={10} x2={110} y1={10} y2={110} gradientUnits="userSpaceOnUse">
                                <stop offset={0} stopColor="#5c6f7d" />
                                <stop offset="0.25" stopColor="#6a7b88" />
                                <stop offset="0.49" stopColor="#5c6f7d" />
                                <stop offset="0.5" stopColor="#6a7a86" />
                                <stop offset="0.75" stopColor="#96a5ac" />
                                <stop offset={1} stopColor="#b3c0c5" />
                                <animate attributeName="x1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;10;10;130;130;130;130;130" />
                                <animate attributeName="x2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;110;110;230;230;230;230;230" />
                                <animate attributeName="y1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;-90;-90;-90;-90;-90;10;10" />
                                <animate attributeName="y2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;10;10;10;10;10;110;110" />
                            </linearGradient>
                            <linearGradient id="grad3" gradientTransform="rotate(270 60 60)" x={10} x2={110} y1={10} y2={110} gradientUnits="userSpaceOnUse">
                                <stop offset={0} stopColor="#b3c0c5" />
                                <stop offset="0.25" stopColor="#96a5ac" />
                                <stop offset="0.49" stopColor="#6a7a86" />
                                <stop offset="0.5" stopColor="#5c6f7d" />
                                <stop offset="0.75" stopColor="#6a7b88" />
                                <stop offset={1} stopColor="#5c6f7d" />
                                <animate attributeName="x1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;10;10;10;-110;-110;-110;-110" />
                                <animate attributeName="x2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;110;110;110;-10;-10;-10;-10" />
                                <animate attributeName="y1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;-90;-90;-90;-90;-90;10;10" />
                                <animate attributeName="y2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;10;10;10;10;10;110;110" />
                            </linearGradient>
                            <linearGradient id="grad4" gradientTransform="rotate(0 60 60)" x={10} x2={110} y1={10} y2={110} gradientUnits="userSpaceOnUse">
                                <stop offset={0} stopColor="#5c6f7d" />
                                <stop offset="0.25" stopColor="#6a7b88" />
                                <stop offset="0.49" stopColor="#5c6f7d" />
                                <stop offset="0.5" stopColor="#6a7a86" />
                                <stop offset="0.75" stopColor="#96a5ac" />
                                <stop offset={1} stopColor="#b3c0c5" />
                                <animate attributeName="x1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;10;10;10;-110;-110;-110;-110" />
                                <animate attributeName="x2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;110;110;110;-10;-10;-10;-10" />
                                <animate attributeName="y1" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="10;10;110;110;110;10;10;10" />
                                <animate attributeName="y2" repeatCount="indefinite" dur="3s" calcMode="spline" keyTimes="	0; 0.143; 0.286; 0.429; 0.572; 0.715; 0.858; 1" keySplines="0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09; 1 0.14 0.26 0.65; 0.1 0.42 0.89 0.09" values="110;110;210;210;210;110;110;110" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            )}
        </>
    );
}