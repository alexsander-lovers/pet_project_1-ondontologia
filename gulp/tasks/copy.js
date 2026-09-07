export const copyManifest = () => {
  return app.gulp.src(app.path.source.manifest)
    .pipe(app.gulp.dest(app.path.build.manifest));
};

export const copyfavicon = () => {
  return app.gulp.src(app.path.source.favicon)
    .pipe(app.gulp.dest(app.path.build.favicon));
};
