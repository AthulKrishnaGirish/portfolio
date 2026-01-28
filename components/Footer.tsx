"use client";

export default function Footer() {
    return (
        <footer className="py-10 bg-black text-center border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4">
                <p className="text-zinc-500 text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Athul Krishna Girish. All copyrights reserved.
                </p>
            </div>
        </footer>
    );
}
