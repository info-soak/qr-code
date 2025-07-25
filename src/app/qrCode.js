import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";


export default function QRCode({ url }) {
    const [qrCode, setQRCode] = useState()
    const { bottomText, textColor, color, shape } = useSelector((state) => state.frames);
    const { cornerSquare, dotColor } = useSelector((state) => state.shapes);
    const qrCodeRef = useRef(null);

    useEffect(() => {
        if (typeof window !== undefined) {
            const QRCodeStyling = require('qr-code-styling')
            const qrInstance = new QRCodeStyling({
                shape: "square",
                type: "svg",
                width: 400,
                height: 400,
                margin: 70,
                dotsOptions: {
                    type: "square",
                    color: "#ff1818ff",
                },
                cornersSquareOptions: {
                    type: "classy",
                },
                cornersDotOptions: {
                    type: "rounded",
                }
            })
            setQRCode(qrInstance)
        }
    }, [])

    useEffect(() => {
        if (qrCode && qrCodeRef.current) {
            qrCode.append(qrCodeRef.current);
        }
    }, [url]);

    useEffect(() => {
        if (qrCode) {
            qrCode.update({
                data: url,
                cornersSquareOptions: {
                    type: cornerSquare,
                },
                dotsOptions: {
                    type: "square",
                    color: dotColor,
                },
            });
        }
    }, [url, cornerSquare, dotColor]);

    useEffect(() => {
        if (qrCode) {
            const QRBorderPlugin = require('qr-border-plugin')
            const extensionOptions = {
                round: 1,
                thickness: 60,
                color: color,
                decorations: {
                    bottom: {
                        type: "text",
                        value: bottomText,
                        style: `font: 30px sans-serif; fill: ${textColor};`,
                    },
                },
            };
            if (shape === 'square') {
                qrCode.update({
                    shape: 'square'
                })
                const extensionOptionsNone = {
                    // round: 1,
                    thickness: 0,
                };
                qrCode.applyExtension(QRBorderPlugin(extensionOptionsNone));
            } else if (shape === 'circle') {
                qrCode.update({
                    shape: 'circle'
                })
                qrCode.applyExtension(QRBorderPlugin(extensionOptions));
            }
        }
    }, [shape, bottomText, textColor, color])

    const handleDownload = () => {
        qrCode.download({
            name: "qr-code",
            extension: "png"
        });
    }

    return (
        <div
            className='p-6 bg-white flex flex-col gap-4 items-center justify-center rounded-xl'
        >
            {
                !url ?
                    <div className='flex flex-col items-center justify-center h-110 w-110'>
                        <p className='text-black text-2xl font-bold text-center'>Please Enter Url to create QR Code</p>
                    </div>
                    :
                    <div
                        ref={qrCodeRef}
                    // className="bg-gray-200 p-6"
                    >
                    </div>
            }
            {url && <button
                className='bg-sky-400 text-xl px-4 py-2 rounded-xl font-bold cursor-pointer'
                onClick={handleDownload}
            >
                Download QR Code
            </button>}
        </div>
    )
}