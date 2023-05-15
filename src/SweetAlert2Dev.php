<?php

declare(strict_types=1);

namespace Yii\Assets;

use Yiisoft\Assets\AssetBundle;
use Yiisoft\Files\PathMatcher\PathMatcher;

/**
 * Development asset bundle for the sweet alert2.
 */
final class SweetAlert2Dev extends AssetBundle
{
    public string|null $basePath = '@assets';
    public string|null $baseUrl = '@assetsUrl';
    public string|null $sourcePath = '@npm/sweetalert2/dist';
    public array $css = ['sweetalert2.css'];
    public array $js = ['sweetalert2.js'];

    public function __construct()
    {
        $pathMatcher = new PathMatcher();

        $this->publishOptions = [
            'filter' => $pathMatcher->only('**sweetalert2.css', '**sweetalert2.js'),
        ];
    }
}
