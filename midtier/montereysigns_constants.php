<?php

class montereysigns_constants extends page_base {

    public function build(output $output) {
        $this->response = $this->setup_constants();
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function setup_constants() {
        $return = array(
            'Default'        => array(
                'Year' => date('Y'),
            ),
            'Infrastructure' => array(
                'Result' => cst_infrastructure::result,
                'Pass'   => cst_infrastructure::pass,
                'Fail'   => cst_infrastructure::fail,
            ),
            'P'              => array(
                'Key'    => cst_montereysigns::key,
                'Subnav' => cst_montereysigns::subnav,
                'Url'    => cst_montereysigns::url,
            ),
            'Navbar'         => array(
                array(
                    cst_montereysigns::key    => 'choose_sign',
                    cst_montereysigns::url    => null,
                    cst_montereysigns::subnav => array(
                        array(
                            cst_montereysigns::key => 'commercial',
                            cst_montereysigns::url => cst_montereysigns::url_sitedown,
                        ),
                        array(
                            cst_montereysigns::key => 'printed',
                            cst_montereysigns::url => cst_montereysigns::url_sitedown,
                        ),
                        array(
                            cst_montereysigns::key => 'electrical',
                            cst_montereysigns::url => cst_montereysigns::url_sitedown,
                        ),
                        array(
                            cst_montereysigns::key => 'services',
                            cst_montereysigns::url => cst_montereysigns::url_sitedown,
                        ),
                    ),
                ),
                array(
                    cst_montereysigns::key    => 'our_work',
                    cst_montereysigns::url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::subnav => null,
                ),
                array(
                    cst_montereysigns::key    => null,
                    cst_montereysigns::url    => null,
                    cst_montereysigns::subnav => '/resources/img/monterey-signs.png',
                ),
                array(
                    cst_montereysigns::key    => 'sign_stories',
                    cst_montereysigns::url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::subnav => null,
                ),
                array(
                    cst_montereysigns::key    => 'about_us',
                    cst_montereysigns::url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::subnav => null,
                ),
                array(
                    cst_montereysigns::key    => 'nuts_bolts',
                    cst_montereysigns::url    => cst_montereysigns::url_sitedown,
                    cst_montereysigns::subnav => null,
                ),
            ),
            'Url'            => array(
                'Home'     => cst_montereysigns::url_home,
                'Sitedown' => cst_montereysigns::url_sitedown,
            ),
        );
        return $return;
    }

}
