export const copyManifest = () => {
  return app.gulp.src(app.path.source.manifest)
    .pipe(app.gulp.dest(app.path.build.manifest));
};

export const copyFavicons = () => {
  return app.gulp.src(`${app.path.source.favicons}`, { encoding: false })
    .pipe(app.gulp.dest(`${app.path.build.favicons}`))
    .pipe(app.plugins.browsersync.stream());
};
