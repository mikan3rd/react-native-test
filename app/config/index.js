const config = {
    // 環境によらない設定をここに書く
  };

  const env_config = {
    development: {
      // 開発環境用の設定をここに書く
      server: {
        api: {
          host: 'http://192.168.33.200',
          port: 5200,
        },
      },
    },
    staging: {
      // ステージング環境用の設定をここに書く
    },
    production: {
      // プロダクション環境用の設定をここに書く
    },
  }[process.env.NODE_ENV || 'development'];

  export default Object.assign({}, config, env_config);
