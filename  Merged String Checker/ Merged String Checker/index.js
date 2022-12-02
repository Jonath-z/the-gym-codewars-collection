function isMerge(s, part1, part2) {
  function _isMerge(_s, _part1, _part2) {
    if (_part1.length + _part2.length !== _s.length) return false;

    if (!_s.length) return true;

    if (
      _part1.length > 0 &&
      _s.charAt(0) === _part1.charAt(0) &&
      _isMerge(_s.substring(1), _part1.substring(1), _part2)
    )
      return true;

    if (
      _part2.length > 0 &&
      _s.charAt(0) === _part2.charAt(0) &&
      _isMerge(_s.substring(1), _part1, _part2.substring(1))
    )
      return true;

    return false;
  }

  return _isMerge(s, part1, part2);
}
