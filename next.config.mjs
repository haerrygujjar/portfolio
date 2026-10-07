const nextConfig = {
  output: "export",
  trailingSlash: true,
  agentRules: false,
  experimental: {
    cpus: 1,
    workerThreads: true,
  },
};

export default nextConfig;
