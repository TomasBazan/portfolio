export function CardProject({ repoPath }: { repoPath: string }) {

  return (
    <>
      <section className="border-solid border-2 rounded-sm">
        <h2>Project Name</h2>
        <p>Project Description</p>
        <a href={repoPath ? `https://github.com/TomasBazan/${repoPath}` : `https://github.com/TomasBazan?tab=repositories`} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </section>
    </>
  );
}