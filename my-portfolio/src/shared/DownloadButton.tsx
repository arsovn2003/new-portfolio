const DownloadButton = () => {

    const handleDownload = () => {
        const pdfUrl = '/cv.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;

        link.download = 'CV.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    return (
        <>
            <button
                className="
                download-btn
                bg-rose-800
                text-white
                w-40
                py-4
                mt-4
                text-xl
                uppercase
                tracking-wide
                fixed
                end-0
                hover:bg-rose-900
                "
                onClick={handleDownload}
            >Download CV</button>
        </>
    )
}

export default DownloadButton;