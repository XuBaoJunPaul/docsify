function replace (m, $1) {
  return '<img class="emoji" src="https://assets-cdn.github.com/images/icons/emoji/' + $1 + '.png" alt="' + $1 + '" />'
}

export function emojify (text) {
  return $docsify.noEmoji ? text : text
    .replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, m => m.replace(/:/g, '__colon__'))
    .replace(/:(\w+?):/ig, window.emojify || replace)
    .replace(/__colon__/g, ':')
}
