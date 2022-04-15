/**
 * 用于计算资源的前缀
 * @param repo
 * @returns {{prefix: string}}
 */
export function getOssPrefix(repo) {
    function repoNotNull(repo) {
        if (repo === 0) {
            return 'vuepress-blog-oss-0'
        } else if (repo === 1) {
            return 'vuepress-blog-oss-1'
        }
        return 'vuepress-blog-oss'
    }

    const oss = {
        // prefix: 'https://gitee.com/funuf/' + repoNotNull(repo) + '/raw/master' ,
        prefix: 'https://gitlab.com/funuf/' + repoNotNull(repo) + '/raw/master' ,
        // prefix: 'http://192.168.3.110:30080/vuepress-blog/' + repoNotNull(repo),
    };

    return oss.prefix
}