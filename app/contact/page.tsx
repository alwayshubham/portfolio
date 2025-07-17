export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-500 to-pink-200 p-10">
            <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]">Contact Me</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto text-center mb-8">
                Feel free to reach out to me via email at <br />
                for any inquiries, collaborations, or just to say hello! I look forward to hearing from you.
            </p>

            <div className="text-center mt-8">
                <p className="text-gray-900">Or connect with me on social media:</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );

}
