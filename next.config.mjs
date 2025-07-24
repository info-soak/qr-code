/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static HTML export
    // Optional: Add a base path if your GitHub Pages URL includes a repository name
    // For a User/Organization site (username.github.io), you typically don't need basePath.
    // For a Project site (username.github.io/repo-name/), you DO need basePath.
    // Replace 'your-repo-name' with the actual name of your GitHub repository.
    basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
